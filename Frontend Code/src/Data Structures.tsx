// This file contains all interface definitions for the quiz view.

/** Describes the structure of the quiz metadata. */
export interface QuizMetadata {
    // Quiz title
    quiz_title: string

    // Quiz subtitle
    quiz_subtitle: string | null

    // Number of seconds the user is allowed to complete the quiz. Null means unlimited time.
    time_allowed: number | null

    // Number of times the user can attempt to submit the quiz. Null means unlimited attempts.
    attempts_allowed: number | null

    // Whether to randomize order of answer choices
    randomize_choice_order: boolean

    // Whether to randomize the order of questions
    randomize_question_order: boolean

    // A quiz consists of multiple sections.
    sections: Section[]

    /* Define more attributes as needed */
}

/** Describes the structure of any question. */
export interface Question {
    // Question type ID. You can add more if needed.
    question_type: "multiple_choice" | "checkboxes" | "short_response" | "numeric_response" | "code_completion"
    
    // The question prompt.
    prompt: string

    // The question subtitle.
    subtitle: string | null
}

// Sections contain a list of questions.
export interface Section {
    section_index: number,
    title: string | null,
    subtitle: string | null,
    questions: Question[]
}