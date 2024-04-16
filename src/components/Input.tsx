// import { InputHTMLAttributes, forwardRef, type ComponentPropsWithoutRef, type  FC } from "react"

// type InputProps = InputHTMLAttributes<HTMLInputElement> & {
//     label: string,
//     id: string
// }

// const Input: FC<InputProps>=forwardRef<HTMLInputElement, InputProps >(({label, id, ...props}, ref)=>{
//     return (
//         <>
//           <label htmlFor={id}>{label}</label>
//           <input id={id}  {...props} ref={ref} />
//         </>
//     )
// })

// export default Input



import { forwardRef, InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string,
    id: string
};

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, id, ...rest }, ref) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input name={id} id={id} {...rest} ref={ref} />
        </div>
    );
});

export default Input;
