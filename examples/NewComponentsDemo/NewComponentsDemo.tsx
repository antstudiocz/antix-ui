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

export const NewComponentsDemo = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openSheet, setOpenSheet] = useState(false);
  const [radioValue, setRadioValue] = useState("option-one");
  const [checkboxValue, setCheckboxValue] = useState(false);

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">
        New Components Demo
      </h1>

      {/* Separator Demo */}
      <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Separator</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium mb-2">
              Horizontal Separator (default)
            </h3>
            <div className="flex flex-col space-y-4">
              <p>Content above separator</p>
              <Separator />
              <p>Content below separator</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Vertical Separator</h3>
            <div className="flex h-20 items-center">
              <div>Content left</div>
              <Separator orientation="vertical" className="mx-4" />
              <div>Content right</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dialog Demo */}
      <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Dialog</h2>
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
                <p>The Dialog component creates an accessible modal dialog.</p>
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
                <p>The Dialog component manages its own state in this case.</p>
              </div>
              <DialogFooter>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  Close
                </button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Popover Demo */}
      <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Popover</h2>
        <div className="space-y-4 flex flex-wrap gap-4">
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

          <Popover>
            <PopoverTrigger className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
              Open Popover (Bottom)
            </PopoverTrigger>
            <PopoverContent align="center" side="bottom" className="w-60">
              <div className="p-2">
                <h3 className="font-medium mb-1">Popover Title</h3>
                <p className="text-sm text-gray-600">
                  This popover appears below the trigger element.
                </p>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              Open Popover (Left)
            </PopoverTrigger>
            <PopoverContent align="center" side="left" className="w-60">
              <div className="p-2">
                <h3 className="font-medium mb-1">Popover Title</h3>
                <p className="text-sm text-gray-600">
                  This popover appears to the left of the trigger element.
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </section>

      {/* Sheet Demo */}
      <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Sheet</h2>
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
                  The Sheet component creates a sliding panel that appears from
                  the edge of the screen.
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

            <Sheet>
              <SheetTrigger className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Sheet (Top)
              </SheetTrigger>
              <SheetContent side="top">
                <SheetHeader>
                  <SheetTitle>Sheet from Top</SheetTitle>
                  <SheetDescription>
                    This sheet slides in from the top of the screen.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Sheet (Bottom)
              </SheetTrigger>
              <SheetContent side="bottom">
                <SheetHeader>
                  <SheetTitle>Sheet from Bottom</SheetTitle>
                  <SheetDescription>
                    This sheet slides in from the bottom of the screen.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </section>

      {/* Badge Demo */}
      <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Badge</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>

      {/* RadioGroup Demo */}
      <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">RadioGroup</h2>
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
      </section>

      {/* Checkbox Demo */}
      <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Checkbox</h2>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={checkboxValue}
            onCheckedChange={(checked) => setCheckboxValue(checked as boolean)}
          />
          <label htmlFor="terms">Accept terms and conditions</label>
        </div>
        <div className="mt-2 text-sm">
          Checkbox state: {checkboxValue ? "Checked" : "Unchecked"}
        </div>
      </section>
    </div>
  );
};

export default NewComponentsDemo;
