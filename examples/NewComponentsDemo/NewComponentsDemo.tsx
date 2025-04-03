import React, { useState } from "react";
import { Separator } from "@/components/Separator/Separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog/Dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/Popover/Popover";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/Sheet/Sheet";
import { Badge } from "@/components/Badge/Badge";
import { RadioGroup, RadioGroupItem } from "@/components/RadioGroup/RadioGroup";
import { Checkbox } from "@/components/Checkbox/Checkbox";
import { Carousel } from "@/components/Carousel/Carousel";

// Types for scenarios
interface ComponentScenario {
  title: string;
  description?: string;
  props?: Record<string, unknown>;
  component: React.ReactNode;
}

interface ComponentSection {
  title: string;
  description?: string;
  scenarios: ComponentScenario[];
}

// Helper function to safely stringify props
const safeStringifyProp = (value: unknown): string => {
  if (Array.isArray(value)) {
    return `[${value.length} items]`;
  }
  if (React.isValidElement(value)) {
    return "<ReactElement>";
  }
  if (typeof value === "function") {
    return "<Function>";
  }
  if (typeof value === "object" && value !== null) {
    return "{...}";
  }
  return JSON.stringify(value);
};

export const NewComponentsDemo = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openSheet, setOpenSheet] = useState(false);
  const [radioValue, setRadioValue] = useState("option-one");
  const [checkboxValue, setCheckboxValue] = useState(false);

  // Sample items for carousel
  const carouselItems = [
    <div key="1" className="bg-blue-100 p-8 rounded-lg text-center h-full">
      <h3 className="text-xl font-semibold mb-2">Slide 1</h3>
      <p>This is the first slide content.</p>
    </div>,
    <div key="2" className="bg-green-100 p-8 rounded-lg text-center h-full">
      <h3 className="text-xl font-semibold mb-2">Slide 2</h3>
      <p>This is the second slide content.</p>
    </div>,
    <div key="3" className="bg-purple-100 p-8 rounded-lg text-center h-full">
      <h3 className="text-xl font-semibold mb-2">Slide 3</h3>
      <p>This is the third slide content.</p>
    </div>,
  ];

  // Sample items for vertical carousel
  const verticalCarouselItems = [
    <div
      key="1"
      className="bg-blue-100 p-8 rounded-lg text-center h-full flex items-center justify-center"
    >
      <div>
        <h3 className="text-xl font-semibold mb-2">Vertical Slide 1</h3>
        <p>Scroll up and down to navigate</p>
      </div>
    </div>,
    <div
      key="2"
      className="bg-green-100 p-8 rounded-lg text-center h-full flex items-center justify-center"
    >
      <div>
        <h3 className="text-xl font-semibold mb-2">Vertical Slide 2</h3>
        <p>Use the arrows or dots to navigate</p>
      </div>
    </div>,
    <div
      key="3"
      className="bg-purple-100 p-8 rounded-lg text-center h-full flex items-center justify-center"
    >
      <div>
        <h3 className="text-xl font-semibold mb-2">Vertical Slide 3</h3>
        <p>Each slide takes full height</p>
      </div>
    </div>,
  ];

  // Define sections with scenarios
  const sections: ComponentSection[] = [
    {
      title: "Separator",
      description: "A horizontal or vertical line that separates content",
      scenarios: [
        {
          title: "Horizontal Separator",
          description: "Default horizontal separator between content",
          props: { orientation: "horizontal" },
          component: (
            <div className="flex flex-col space-y-4">
              <p>Content above separator</p>
              <Separator />
              <p>Content below separator</p>
            </div>
          ),
        },
        {
          title: "Vertical Separator",
          description: "Vertical separator between content",
          props: { orientation: "vertical" },
          component: (
            <div className="flex h-20 items-center">
              <div>Content left</div>
              <Separator orientation="vertical" className="mx-4" />
              <div>Content right</div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Dialog",
      description:
        "A modal dialog that interrupts the user with important content",
      scenarios: [
        {
          title: "Controlled Dialog",
          description: "Dialog controlled via state",
          props: { open: openDialog, onOpenChange: setOpenDialog },
          component: (
            <div className="space-y-4">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => setOpenDialog(true)}
              >
                Open Dialog (Controlled)
              </button>
              <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Controlled Dialog</DialogTitle>
                    <DialogDescription>
                      This dialog is controlled via state.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <p>
                      The Dialog component creates an accessible modal dialog.
                    </p>
                  </div>
                  <DialogFooter>
                    <button
                      className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 mr-2"
                      onClick={() => setOpenDialog(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                      onClick={() => setOpenDialog(false)}
                    >
                      Confirm
                    </button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          ),
        },
        {
          title: "Uncontrolled Dialog",
          description: "Dialog that manages its own state",
          component: (
            <Dialog>
              <DialogTrigger className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Open Dialog (Uncontrolled)
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Uncontrolled Dialog</DialogTitle>
                  <DialogDescription>
                    This dialog is uncontrolled.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p>
                    The Dialog component manages its own state in this case.
                  </p>
                </div>
                <DialogFooter>
                  <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                    Close
                  </button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ),
        },
      ],
    },
    {
      title: "Popover",
      description: "A popup content that appears next to an element",
      scenarios: [
        {
          title: "Popover Positions",
          description: "Popovers can be positioned in different directions",
          component: (
            <div className="flex flex-wrap gap-4">
              <Popover>
                <PopoverTrigger className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                  Open Popover (Top)
                </PopoverTrigger>
                <PopoverContent align="center" side="top" className="w-60">
                  <div className="p-2">
                    <h3 className="font-medium mb-1">Popover Title</h3>
                    <p className="text-sm text-gray-600">
                      This popover appears above the trigger element.
                    </p>
                  </div>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
                  Open Popover (Right)
                </PopoverTrigger>
                <PopoverContent align="center" side="right" className="w-60">
                  <div className="p-2">
                    <h3 className="font-medium mb-1">Popover Title</h3>
                    <p className="text-sm text-gray-600">
                      This popover appears to the right of the trigger element.
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          ),
        },
      ],
    },
    {
      title: "Sheet",
      description: "A sliding panel that appears from the edge of the screen",
      scenarios: [
        {
          title: "Controlled Sheet",
          description: "Sheet controlled via state",
          props: { open: openSheet, onOpenChange: setOpenSheet },
          component: (
            <div className="space-y-4">
              <button
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                onClick={() => setOpenSheet(true)}
              >
                Open Sheet (Controlled)
              </button>
              <Sheet open={openSheet} onOpenChange={setOpenSheet}>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Controlled Sheet</SheetTitle>
                    <SheetDescription>
                      This sheet is controlled via state.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <p>
                      The Sheet component creates a sliding panel that appears
                      from the edge of the screen.
                    </p>
                  </div>
                  <SheetFooter>
                    <button
                      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                      onClick={() => setOpenSheet(false)}
                    >
                      Close Sheet
                    </button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          ),
        },
        {
          title: "Sheet Positions",
          description: "Sheets can slide in from different directions",
          component: (
            <div className="flex flex-wrap gap-2">
              <Sheet>
                <SheetTrigger className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
                  Sheet (Right)
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Sheet from Right</SheetTitle>
                    <SheetDescription>
                      This sheet slides in from the right side of the screen.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>

              <Sheet>
                <SheetTrigger className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
                  Sheet (Left)
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Sheet from Left</SheetTitle>
                    <SheetDescription>
                      This sheet slides in from the left side of the screen.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          ),
        },
      ],
    },
    {
      title: "Badge",
      description: "A small status descriptor for UI elements",
      scenarios: [
        {
          title: "Badge Variants",
          description: "Different styles of badges",
          component: (
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          ),
        },
      ],
    },
    {
      title: "RadioGroup",
      description: "A set of radio buttons for selecting a single option",
      scenarios: [
        {
          title: "Basic RadioGroup",
          description: "Standard radio group with controlled state",
          props: { value: radioValue, onValueChange: setRadioValue },
          component: (
            <div>
              <RadioGroup value={radioValue} onValueChange={setRadioValue}>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem id="option-one" value="option-one" />
                  <label htmlFor="option-one">Option One</label>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem id="option-two" value="option-two" />
                  <label htmlFor="option-two">Option Two</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="option-three" value="option-three" />
                  <label htmlFor="option-three">Option Three</label>
                </div>
              </RadioGroup>
              <div className="mt-2 text-sm">Selected value: {radioValue}</div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Checkbox",
      description:
        "A control that allows the user to toggle between checked and unchecked states",
      scenarios: [
        {
          title: "Basic Checkbox",
          description: "Standard checkbox with controlled state",
          props: { checked: checkboxValue, onCheckedChange: setCheckboxValue },
          component: (
            <div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={checkboxValue}
                  onCheckedChange={(checked) =>
                    setCheckboxValue(checked as boolean)
                  }
                />
                <label htmlFor="terms">Accept terms and conditions</label>
              </div>
              <div className="mt-2 text-sm">
                Checkbox state: {checkboxValue ? "Checked" : "Unchecked"}
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Carousel",
      description: "A slideshow component for cycling through elements",
      scenarios: [
        {
          title: "Basic Carousel",
          description: "Carousel with outside navigation",
          props: { items: carouselItems },
          component: <Carousel items={carouselItems} className="w-full" />,
        },
        {
          title: "Inside Navigation Carousel",
          description: "Carousel with navigation controls inside",
          props: { items: carouselItems, navigationPosition: "inside" },
          component: (
            <Carousel
              items={carouselItems}
              className="w-full"
              navigationPosition="inside"
            />
          ),
        },
        {
          title: "Autoplay Carousel",
          description: "Carousel with autoplay functionality",
          props: {
            items: carouselItems,
            autoplay: true,
            autoplayInterval: 5000,
            loop: true,
          },
          component: (
            <Carousel
              items={carouselItems}
              className="w-full"
              autoplay
              autoplayInterval={5000}
              navigationPosition="inside"
              opts={{ loop: true }}
            />
          ),
        },
        {
          title: "Vertical Carousel",
          description: "Carousel with vertical orientation",
          props: { items: verticalCarouselItems, orientation: "vertical" },
          component: (
            <div className="h-[400px] w-full">
              <Carousel
                items={verticalCarouselItems}
                className="w-full h-full"
                orientation="vertical"
                navigationPosition="inside"
              />
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Component Variants Demo
        </h1>

        <div className="space-y-16">
          {sections.map((section, sectionIndex) => (
            <div
              key={`section-${sectionIndex}`}
              className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="absolute -top-4 left-8 bg-gray-50 dark:bg-gray-900 px-4 py-1 rounded-full border border-gray-200 dark:border-gray-600">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {section.title}
                </h2>
              </div>

              {section.description && (
                <p className="mt-4 mb-8 text-gray-600 dark:text-gray-400">
                  {section.description}
                </p>
              )}

              <div className="space-y-8">
                {section.scenarios.map((scenario, scenarioIndex) => (
                  <div
                    key={`scenario-${sectionIndex}-${scenarioIndex}`}
                    className="relative bg-gray-50 dark:bg-gray-900 rounded-xl p-6"
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                      <div className="px-3 py-1 bg-white dark:bg-gray-800 rounded-md text-lg font-medium text-gray-900 dark:text-white shadow-sm">
                        {scenario.title}
                      </div>
                      {scenario.description && (
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {scenario.description}
                        </p>
                      )}
                      {scenario.props && (
                        <div className="flex gap-2 flex-wrap">
                          {Object.entries(scenario.props).map(
                            ([key, value]) => (
                              <code
                                key={key}
                                className="px-2 py-1 text-sm bg-white dark:bg-gray-800 rounded-md text-gray-700 dark:text-gray-300 font-mono shadow-sm"
                              >
                                {key}={safeStringifyProp(value)}
                              </code>
                            )
                          )}
                        </div>
                      )}
                    </div>

                    <div className="flex justify-center">
                      {scenario.component}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewComponentsDemo;
