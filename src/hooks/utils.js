export default function cutDescription(description, limit) { 
    if (description.split(" ").length > limit) {
        return [description.split(" ").slice(0, limit).join(" ") + "...", true]
    } else {
        return [description, false]
    }
}