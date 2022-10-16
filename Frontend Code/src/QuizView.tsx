// Use this file to implement the quiz view.

import React from 'react';
import { TextField } from "@material-ui/core"
import MarkdownTextView from './Components/MarkdownTextView';
import { Question, QuizMetadata } from './Data Structures';
import './QuizView.css'

interface QuizViewProps {
    metadata: QuizMetadata
    questions: Question[]
}
 
interface QuizViewState {
    // Gives the unix timestamp of the user's starting time.
    quizStartTime?: number

    /* Define more state variables as needed */
}
 
class QuizView extends React.Component<QuizViewProps, QuizViewState> {
    constructor(props: QuizViewProps) {
        super(props);
        this.state = {
            
        };
    }
    render() {

        // Here is an example of how you can insert a variable number of elements into a page
        let questions: JSX.Element[] = []

        questions.push(<div className='quiz-shortresponse'>
            <TextField
            label="What is your name?"
            variant='outlined'
            />
        </div>)

        questions.push(<div className='quiz-shortresponse'>
            <TextField
            label="Where are you from?"
            variant='outlined'
            />
        </div>)

        return (
            <div className='quiz-container'>
                <h2 className='quiz-title'><MarkdownTextView rawText={this.props.metadata.quiz_title} /></h2>
                <MarkdownTextView rawText={this.props.metadata.quiz_subtitle || undefined} />
                {questions}
            </div>

        )
    }
}
 
export default QuizView;