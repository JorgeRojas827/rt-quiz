import { Fragment } from 'react';

export const Card = () => {
    return (
        <Fragment>
            <div className="w-24 h-24 dark:bg-gray-800 rounded shadow-2xl text-2xl">Quiz</div>
            <button className="bg-blue-600 p-2 text-white focus:outline-none rounded w-24 h-10">Start Quiz</button>
        </Fragment>
    )
}
