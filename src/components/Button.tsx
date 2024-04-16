import { type ReactNode, type ComponentPropsWithoutRef, type FC } from "react";

type ButtonProps = {
    el: "button",
    children: ReactNode
} & ComponentPropsWithoutRef<"button">

type AnchorProps = {
    el: "anchor",
    href: string,
    children: ReactNode
} & ComponentPropsWithoutRef<"a">

type ElProps = ButtonProps|AnchorProps

const Button: FC<ElProps>=(props)=>{
    if (props.el==="anchor"){
        return <a className="button" {...props}>{props.children}</a>
    }
    return(
        <button className="button" {...props}>{props.children}</button>
    )
}

export default Button