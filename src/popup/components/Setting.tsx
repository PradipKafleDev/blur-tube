import type {ReactNode} from "react";

/**
 * Props for a single BlurTube settings toggle.
 */
type SettingProps = {
    /** Icon displayed for the setting. */
    icon: ReactNode;

    /** Setting label shown to the user. */
    title: string;

    /** Short description of what the setting controls. */
    description: string;

    /** Whether the setting is currently enabled. */
    enabled: boolean;

    /** Called when the user changes the setting. */
    onChange: (enabled: boolean) => void;
};
function Setting({
                     icon,
                     title,
                     description,
                     enabled,
                     onChange,
                 }: SettingProps) {
    return (
        <section className="setting">
            <div className="setting-info">
                <div className="setting-icon">{icon}</div>

                <div>
                    <strong>{title}</strong>
                    <span>{description}</span>
                </div>
            </div>

            <button
                type="button"
                className={`toggle ${enabled ? "enabled" : ""}`}
                onClick={() => onChange(!enabled)}
                aria-pressed={enabled}
                aria-label={`Toggle ${title}`}
            >
                <span />
            </button>
        </section>
    );
}

export default Setting;