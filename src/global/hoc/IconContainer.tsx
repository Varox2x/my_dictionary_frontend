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
    color?: string,
    size?: number
};

const IconContainer = ({ icon: Icon, style, color, size }: Props) => {
    return (
        <div style={{ ...style, display: "flex", justifyContent: 'center', alignItems: 'center' }}>
            <Icon style={{ color: color || 'white', fontSize: `${size}px` || '20px', transition: '500ms' }} />
        </div>
    )
}

export default IconContainer