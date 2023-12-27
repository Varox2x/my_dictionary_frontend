type StyleProps = {
    color?: string;
    fontSize?: string;
    right?: string;
    left?: string;
    top?: string;
    position?: React.CSSProperties["position"];
};

type Props = {
    icon: React.FunctionComponent,
    style?: StyleProps,
    color?: string
};

const IconContainer = ({ icon: Icon, style, color }: Props) => {
    return (
        <div style={style}>
            <Icon style={{ color: color || 'white', fontSize: '20px' }} />
        </div>
    )
}

export default IconContainer