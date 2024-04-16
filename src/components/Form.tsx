import { ComponentPropsWithoutRef, FormEvent,  forwardRef, useImperativeHandle, useRef, type FC } from "react";

export type FormHandle = {

}

type FormProps = ComponentPropsWithoutRef<"form"> &{
    onSave: (value: unknown)=>void
}

const Form: FC<FormProps>=forwardRef(({onSave, children, ...rest}, ref)=>{

    const form = useRef<HTMLFormElement>(null)

    useImperativeHandle(ref,()=>{
        return {
            clear(){
                console.log("Clearing")
                form.current?.reset()
            }
        }
    })

    const handleSubmit =(event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const data = Object.fromEntries(formData)
        onSave(data)
        form.current?.reset()
    }

    return(
        <form ref={form} onSubmit={handleSubmit} {...rest}>
            {children}
        </form>
    )
}
)
export default Form