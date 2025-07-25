


export enum variant {
    primary= 'primary',
    secondary='secondary',
}

export enum size {
    small= 'small',
    medium='medium',
    large='large'
}

export type IButton = {
    variant: variant,
    size: size
    color: string,
    label: string,
    onMyClick?:()=> void

}