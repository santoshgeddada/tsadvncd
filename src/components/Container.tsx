import { type ReactNode, type ElementType, type FC, type ComponentPropsWithoutRef } from "react";

type ContainerProps<T extends ElementType> = {
    as: T,
    children: ReactNode
} & ComponentPropsWithoutRef<T>

const Container: FC<ContainerProps<ElementType>> =({as: Component, children,...props})=>{
    return <Component {...props}>{children}</Component>
}

export default Container