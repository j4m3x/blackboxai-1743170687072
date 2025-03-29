// const express = require('express');
// const cors = require('cors');
// const path = require('path');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.static('static'));

// // In-memory storage for interview questions
// let interviewQuestions = [
//     {
//         id: 1,
//         category: "Academic Background",
//         questions: [
//             "Tell me about your academic background and achievements.",
//             "What motivated you to choose your field of study?",
//             "How has your previous education prepared you for this program?",
//             "What were your favorite subjects during your undergraduate studies?",
//             "Tell me about any research projects you've worked on."
//         ]
//     },
//     {
//         id: 2,
//         category: "Program Choice",
//         questions: [
//             "Why did you choose this university?",
//             "What specific aspects of our program interest you?",
//             "How does this program align with your career goals?",
//             "What courses in our curriculum interest you the most?",
//             "Have you applied to other universities? Why prefer this one?"
//         ]
//     },
//     {
//         id: 3,
//         category: "Financial Planning",
//         questions: [
//             "How will you finance your studies?",
//             "Do you have any scholarships or financial aid?",
//             "Have you researched the cost of living in this area?",
//             "Do you plan to work while studying?",
//             "What is your backup plan for financial emergencies?"
//         ]
//     },
//     {
//         id: 4,
//         category: "Future Plans",
//         questions: [
//             "What are your plans after graduation?",
//             "Where do you see yourself in 5 years?",
//             "How will this degree help your career?",
//             "Do you plan to return to your home country?",
//             "Tell me about your long-term career goals."
//         ]
//     },
//     {
//         id: 5,
//         category: "Personal Preparation",
//         questions: [
//             "How will you handle living in a new country?",
//             "Have you visited the United States before?",
//             "How will you manage cultural differences?",
//             "Do you have any relatives in the United States?",
//             "What challenges do you expect to face?"
//         ]
//     }
// ];

// // Routes
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'static', 'index.html'));
// });

// // Get all question categories
// app.get('/api/categories', (req, res) => {
//     try {
//         const categories = interviewQuestions.map(cat => ({
//             id: cat.id,
//             name: cat.category
//         }));
//         res.json({ success: true, categories });
//     } catch (error) {
//         console.error('Error fetching categories:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// // Get questions by category
// app.get('/api/questions/:categoryId', (req, res) => {
//     try {
//         const categoryId = parseInt(req.params.categoryId);
//         const category = interviewQuestions.find(cat => cat.id === categoryId);
//         if (!category) {
//             return res.status(404).json({ error: 'Category not found' });
//         }
//         res.json({ 
//             success: true, 
//             category: category.category,
//             questions: category.questions
//         });
//     } catch (error) {
//         console.error('Error fetching questions:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// // Add a new question to a category
// app.post('/api/questions/:categoryId', (req, res) => {
//     try {
//         const categoryId = parseInt(req.params.categoryId);
//         const { question } = req.body;
        
//         if (!question || question.trim() === '') {
//             return res.status(400).json({ error: 'Question cannot be empty' });
//         }

//         const category = interviewQuestions.find(cat => cat.id === categoryId);
//         if (!category) {
//             return res.status(404).json({ error: 'Category not found' });
//         }

//         category.questions.push(question.trim());
//         res.json({ 
//             success: true, 
//             message: 'Question added successfully',
//             questions: category.questions
//         });
//     } catch (error) {
//         console.error('Error adding question:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// // Delete a question from a category
// app.delete('/api/questions/:categoryId/:questionIndex', (req, res) => {
//     try {
//         const categoryId = parseInt(req.params.categoryId);
//         const questionIndex = parseInt(req.params.questionIndex);
        
//         const category = interviewQuestions.find(cat => cat.id === categoryId);
//         if (!category) {
//             return res.status(404).json({ error: 'Category not found' });
//         }

//         if (questionIndex < 0 || questionIndex >= category.questions.length) {
//             return res.status(400).json({ error: 'Invalid question index' });
//         }

//         category.questions.splice(questionIndex, 1);
//         res.json({ 
//             success: true, 
//             message: 'Question deleted successfully',
//             questions: category.questions
//         });
//     } catch (error) {
//         console.error('Error deleting question:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// // Get a random question (for practice mode)
// app.get('/api/random-question', (req, res) => {
//     try {
//         const categoryIndex = Math.floor(Math.random() * interviewQuestions.length);
//         const category = interviewQuestions[categoryIndex];
//         const questionIndex = Math.floor(Math.random() * category.questions.length);
        
//         res.json({ 
//             success: true,
//             category: category.category,
//             question: category.questions[questionIndex]
//         });
//     } catch (error) {
//         console.error('Error getting random question:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// // Start server
// const PORT = 8000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
