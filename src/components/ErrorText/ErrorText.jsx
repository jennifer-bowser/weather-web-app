export default function ErrorText({ locationCode }) {
    const getText = (locationCode) => {
        console.log(locationCode);
        let content = "";
        if (locationCode) {
            content = "Hmm, looks like we're having issues. Try again later!"
        }
        else {
            content = "Tell us where you're at"
        }

        return content;
    }

    return (
        <p>{getText(locationCode)}</p>
    )
}