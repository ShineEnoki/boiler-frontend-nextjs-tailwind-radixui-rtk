import React from 'react';
import DatePicker from 'react-datepicker';

import { Box, Flex, Text } from '@radix-ui/themes';

import 'react-datepicker/dist/react-datepicker.css';
import './custom_month_picker.css';
import { Button } from './button';
import { cn } from "@/utils/cn"
import dayjs from '../../utils/dayjs';
import { FaCalendar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type Props = {
  title?: string;
  date?: Date | null;
  onChange: (value: Date | null) => void;
  minDate?: Date | null;
  enableMonth?: boolean | null;
  className?: string;
};

const MonthPicker: React.FC<Props> = ({
  title = '',
  date = new Date(),
  onChange,
  // minDate,
  className,
  enableMonth,
}) => {
  const handleDateChange = (date: Date | null) => {
    onChange(date);
  };

  const getMonthYear = (date: Date | null) => {
    if (!date) return '';

    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    if (enableMonth) {
      return `${month} ${year}`;
    } else {
      return `${year}`;
    }
  };

  return (
    <Flex className="w-full h-full relative" direction="column" justify="between">
      <Text className="font-medium text-gray-100 pb-[px]">{title}</Text>
      <Box className="relative">
        <DatePicker
          selected={date}
          onChange={handleDateChange}
          dateFormat={enableMonth ? 'MMM YYYY' : 'YYYY'} // customize date format if needed
          wrapperClassName="w-full" // ensure the DatePicker wrapper is full width
          calendarClassName="w-full" // ensure the calendar is full width
          customInput={
            <Button
              variant={'link'}
              className={cn(
                'w-[280px] justify-start text-left font-normal border border-gray-600 bg-white text-gray-600',
                !date && 'text-muted-foreground',
                className
              )}
            >
              <FaCalendar className="mr-2 h-4 w-4" />
              {date ? (
                dayjs(date).format(enableMonth ? 'MMM YYYY' : 'YYYY')
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          }
          showMonthYearPicker={enableMonth ? true : false}
          showYearPicker={!enableMonth ? true : false}
          renderCustomHeader={({
            // date,
            decreaseMonth,
            increaseMonth,
            // decreaseYear,
            // increaseYear,
          }) => (
            <Flex justify="between" align="center" className="w-full">
              <FaChevronLeft onClick={decreaseMonth} className=" w-[18px] h-[18px]" />
              <Text className="font-semibold text-[14px]">{getMonthYear(date)}</Text>
              <FaChevronRight onClick={increaseMonth} className=" w-[18px] h-[18px]" />
            </Flex>
          )}
        />
      </Box>
    </Flex>
  );
};

export default MonthPicker;
