import * as React from 'react';

import { cn } from "@/utils/cn"
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  postfix?: React.ReactNode;
  preFix?: React.ReactNode;
  readonly?: boolean;
  isError?: boolean | undefined | null;
  isSearch?: boolean;
}

// const Input = React.forwardRef<HTMLInputElement, InputProps>(
//   ({ className, type, preFix, postfix, disabled, readOnly, isError = false, isSearch = false, ...props }, ref) => {
//     const [isPasswordVisible, setPasswordVisible] = React.useState(false);

//     const togglePasswordVisibility = () => {
//       if (!disabled) {
//         setPasswordVisible(!isPasswordVisible);
//       }
//     };

//     return (
//       <div className="relative w-full flex items-center">
//         <input
//           type={isPasswordVisible ? 'text' : type}
//           className={cn("peer placeholder-transparent",
//             readOnly || disabled ? 'bg-gray-100' : '',
//             isError ? 'border-destructive' : 'border-border',
//             'flex h-[56px] w-full rounded-lg border  px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-placeholder focus-visible:outline-none focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50',
//             preFix && 'pl-[40px]',
//             isSearch && 'h-[40px]',
//             className
//           )}
//           ref={ref}
//           disabled={disabled}
//           readOnly={readOnly}
//           {...props}
//           autoComplete="off"
//         />

//         <label 
//           className={cn('bg-white p-1 absolute left-[10px] -top-[14px] text-sm text-text-secondary hover:cursor-pointer peer-placeholder-shown:top-[14px] peer-hover:-top-[14px] transition-all duration-50 ',
//           preFix && "left-[36px]",
//           isSearch && "-top-[14px] peer-placeholder-shown:top-[6px] peer-hover:-top-[14px] p-1"
//           )}>
//           {props.placeholder}
//         </label>

//         {type === 'password' && (
//           <button
//             type="button"
//             className={cn('absolute right-3 top-1/2 transform -translate-y-1/2', {
//               'cursor-not-allowed opacity-50': disabled,
//             })}
//             onClick={togglePasswordVisibility}
//             disabled={disabled}
//           >
//             {!isPasswordVisible ? (
//               <Eye className="w-4 h-4 text-gray-500" />
//             ) : (
//               <EyeOff className="w-4 h-4 text-gray-500" />
//             )}
//           </button>
//         )}
//         {preFix && (
//           <div className="absolute left-3 top-1/2 transform -translate-y-1/2">{preFix}</div>
//         )}
//         {postfix && (
//           <div className="absolute right-3 top-1/2 transform -translate-y-1/2">{postfix}</div>
//         )}
//       </div>
//     );
//   }
// );

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  postfix?: React.ReactNode;
  preFix?: React.ReactNode;
  readonly?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, preFix, postfix, disabled, readOnly, ...props }, ref) => {
    const [isPasswordVisible, setPasswordVisible] = React.useState(false);

    const togglePasswordVisibility = () => {
      if (!disabled) {
        setPasswordVisible(!isPasswordVisible);
      }
    };

    return (
      <div className="relative flex items-center">
        <input
          type={isPasswordVisible ? 'text' : type}
          className={cn(
            readOnly || disabled ? 'bg-gray-100' : '',
            'flex h-[56px] w-full rounded-lg border border-border px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-text-placeholder focus-visible:outline-none focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50',
            preFix && 'pl-[40px]',
            className
          )}
          ref={ref}
          disabled={disabled}
          readOnly={readOnly}
          {...props}
          autoComplete="off"
        />
        {type === 'password' && (
          <button
            type="button"
            className={cn('absolute right-3 top-1/2 transform -translate-y-1/2', {
              'cursor-not-allowed opacity-50': disabled,
            })}
            onClick={togglePasswordVisibility}
            disabled={disabled}
          >
            {isPasswordVisible ? (
              <FaEye className="w-4 h-4 text-gray-500" />
            ) : (
              <FaEyeSlash className="w-4 h-4 text-gray-500" />
            )}
          </button>
        )}
        {preFix && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">{preFix}</div>
        )}
        {postfix && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">{postfix}</div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
