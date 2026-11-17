export default function FeatureIcon({icon: Icon, label}) {
    return (
        <button title={label} className="flex hover:bg-gray-600 p-1.5 hover:rounded-md hover:cursor-pointer">
            <Icon color="#97989c" width="18px" />
        </button>
    )
}