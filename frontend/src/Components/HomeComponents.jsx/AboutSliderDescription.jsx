import { forwardRef, useImperativeHandle, useState } from "react";

const AboutSliderDescription = forwardRef(({closeAnimation}, ref) => {
    const [description, setDescription] = useState(null);

    useImperativeHandle(ref, () => ({
        updateDescription:(newDescription) => {
            setDescription(newDescription);
        }
    }));

    return (
        <div className="about-description-wrapper">
            <span className="about-description-close" onClick={()=>{closeAnimation()}}>
                <p className="about-description-close-p"></p>
            </span>
            <div className="about-description-container">
                <p className="about-description-p">{description || ""}</p>
            </div>
        </div>
    );
});

export default AboutSliderDescription;