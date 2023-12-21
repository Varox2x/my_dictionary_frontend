import React from "react"
import * as S from "./elements"

type Props<T> = {
    itemComponent: React.FunctionComponent<T>,
    items: T[]
};

const List = <T,>({ items, itemComponent: ItemComponent }: Props<T>) => {

    return (
        <S.List>
            {items.map((item, i) => {
                return <ItemComponent key={i} {...item} />
            })}
        </S.List>
    )
}

export default List