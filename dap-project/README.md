Data Analytics Pipeline Final Project 


Project Goal:

The goal of this project is to create an online platform that essentially serves as a text similarity classifier that people can create themselves without any understanding of deep learning or convolutional neural networks (which we will build our classifier on top of). When the project is complete, users should be able to upload and classify initial texts which a model will be trained on. From there, they should be able to type in any text and receive similarity scores to the initial baseline texts. There are many critical use cases to this platform. Firstly, this can be used as a mechanism to help companies determine similarity for proposals or grants that they may be seeking. For example, defense contractors can upload a large number of government contracts/grants and upload summaries of their existing research to help determine which contracts their work may be best suited for or help find new contracts that they had not seen previously. Law firms could use this platform on a database of legal cases to determine similarities in their case to existing legal precedence (a huge part of modern day jurisprudence). 

Project Architecture: 

The project is split into three main services: 1. The database, 2. The training service, and 3. The testing service. In the database, we will store the texts that a user uploads alongside the classification name that they ascribe to each document. These documents will then be broken down into sentences which will be split into a training, testing, and validation sets that will be used by the training service to create our initial deep learning model. The training service will use a CNN model that is trained on an embedding size of 8 with 100 epochs. We currently use 6 dense layers with a dropout rate of 0.2 between each layer. This model worked extremely well in our intial testing with novels. Finally, our testing service is a small, rapid service that is focused on providing the user with quick, immediate feedback on the class scores to help drive a seamless user experience. 

Initial MVP:
In the initial MVP, we rolled out a basic web page where users can load a model that we uploaded to Github and evaluate their text similarity to 5 of the most popular books on Project Gutenberg. After loading the model, users can type text into a text box and the class scores (which reflect the similarity score to each book) will be updated in real time. The user can also pre-load sentences from each of the book to see how they score with our model. In the initial MVP, we did not use the database service yet. We relied on a training service to train data from Project Gutenberg and to upload this data to Github. Our testing service was coded into TensorflowJS and made use of the uploaded model weights from our training service to evaluate the user inputted text and return scores.

Final MVP Submission:
For our final submission, we wanted to more closely emulate the true user flow by allowing users to upload their own texts and classification labels. As such, we implemented an upload page, where the user can upload their files (where the first line is the classification label and the rest of the file is the actual text). We added a pre-processing service to access the uploaded files (which we stored on a local database) and then proceed to extract labels and get the input for the models to train on each document's data. We took a similar approach in terms of architecture (6 dense layers with a dropout rate of 0.2 between each layer; embedding size of 8 with 100 epochs) to train our model and upload it to Github. From here, we had another simple user page, where the user could input text into a box and get similarity scores to each of their uploaded files. Again, the training service for this UI was coded in TensorflowJS to optimize for speed and engage with the deep learning model in the front end. 


How to Run: 
To run this application end to end, there are several key steps:

1. Get the upload code running
2. Run the pre-processing and UI/training services through running all cells in the Colab notebook 
