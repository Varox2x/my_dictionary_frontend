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
    style?: StyleProps
};

const IconContainer = ({ icon: Icon, style }: Props) => {
    return (
        <div style={style}>
            <Icon style={{ color: 'white', fontSize: '20px' }} />
        </div>
    )
}

export default IconContainer