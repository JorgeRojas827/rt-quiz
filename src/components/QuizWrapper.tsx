import { SingleQuiz } from "./SingleQuiz"

export const QuizWrapper = () => {
    return (
        <div className="w-2/5 h-2/4 grid grid-rows-3 place-items-center rounded bg-gray-200">
            <SingleQuiz />
            <SingleQuiz />
            <SingleQuiz />
        </div>
    )
}
