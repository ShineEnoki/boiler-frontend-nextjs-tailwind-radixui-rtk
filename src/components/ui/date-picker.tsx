"use client";

import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { cn } from "@/utils/cn";
import { Calendar } from "./calendar";
import dayjs from "@/utils/dayjs";
import { FaCalendar } from "react-icons/fa";

interface DatePickerProps {
  date?: Date | undefined;
  setDate?: (date: Date | undefined) => void;
  className?: string;
  dateFormat?: string;
  label?: string;
  preFix?: boolean;
  disabled?: boolean;
  postFix?: boolean;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  date,
  setDate,
  className,
  dateFormat,
  label,
  disabled,
  preFix = true,
  postFix,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (setDate) {
      setDate(selectedDate);
    }
    setIsOpen(false); // Close the popover when a date is selected
  };

  return (
    <Popover modal={true} open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"link"}
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-[280px] justify-start text-left font-normal !border",
            !date && "text-muted-foreground",
            postFix && "flex items-center justify-between",
            disabled && "cursor-not-allowed text-text-secondary",
            className
          )}
        >
          {preFix && !postFix && <FaCalendar className="mr-2 h-4 w-4" />}
          {date ? (
            dayjs(date).format(dateFormat ? dateFormat : "PPP")
          ) : (
            <span>{label ?? "Pick a date"}</span>
          )}
          {postFix && <FaCalendar className="ml-2 h-4 w-4" />}
        </Button>
      </PopoverTrigger>
      {!disabled && (
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            disabled={disabled}
            selected={date}
            onSelect={handleDateSelect}
            className="w-full"
          />
        </PopoverContent>
      )}
    </Popover>
  );
};