

export const VisibilityControl = ({description, isChecked, callback}) => {

    return (
        <div className="form-check">
            <input type="checkbox"
                   className="form-check-input"
                   checked={isChecked}
                   onChange={(e) => callback(e.target.checked)} />
            <label className="form-check-label">
                Show {description}
            </label>
        </div>
    )
};