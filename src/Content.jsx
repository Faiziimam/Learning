import React from 'react';
import './content.css';
function Content() {
  return (
    <div className="content">
      <h1 className="content_heading">Data Preprocessing</h1>
      <p className="content_text">
        Data preprocessing in Machine Learning refers to the technique of
        preparing the raw data and make it suitable for a building and training
        Machine Learning models.
      </p>

      <div className="content_subtopics">
        <h3>Data preprocessing techniques</h3>
        <ol>
          <li>Import The Libraries</li>
          <br />
          <p>
            Using Libraries eliminate the need for writing codes from scratch
            and in this data preprocessing technique we will use these following
            python Libraries.
          </p>
          <table>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Purpose</th>
            </tr>
            <tr>
              <td>1.</td>
              <td>Numpy</td>
              <td>
                It provides support for large multidimensional array objects and
                various tools to work with them.
              </td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Pandas</td>
              <td>It provides an efficient implementation of a DataFrame .</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>matplotlib </td>
              <td>
                It is used for data visualization and the creation of
                interactive graph/plots.
              </td>
            </tr>
          </table>
          <br />
          <li>Import The Dataset</li>
          <img
            src="https://i.ibb.co/TYLqzVC/Screenshot-17.png"
            alt="Screenshot-17"
            border="0"
          />
          <p>
            The input data we have is our independent Variable whearas the input
            data with which we want to predict something is called dependent
            variable.
          </p>
          <p>
            The reason why we create these variables is because we want to work
            with numpy arrays, instead of pandas dataframe as Numpy arrays are
            more convinent format to work with when bulding Machine learning
            models.
          </p>
          <p>
            iloc allows us to take columns by just taking their index whearas
            .values return values of the column you are taking inside array.
          </p>

          <li>Taking care of missing data</li>
          <img
            src="https://i.ibb.co/RQBk9qk/Screenshot-21.png"
            alt="Screenshot-21"
            border="0"
          />
          <br />
          <p>
            It is very common to encounter missing data. Missing data can reduce
            the efficiency of the study and can lead to invalid conclusions
          </p>
          <p>
            To handle these missing values we will use Sklearn python package.
            <br />
            Fit function is use to extract some information of the data on which
            the object is applied.Then we will use transform function which will
            apply some transformations and will replace the missing value with
            the respective operation(mean,median,prediction imputation)
          </p>
          <li>Encoding categorical data</li>
          <br />
          <p>
            Categorical variables are usually represented as "strings" and
            Machine Learning model require all input and output in numerical
            form. This means that if we ever encounter categorical data then we
            should encode that data.
            <br />
            we are going to use OneHotEncoding and LabelEncoding to convert
            categorical data into numerical data.
          </p>
          <ol type="a">
            <br />
            <li>Encoding the Independent Variable</li>
            <img
              src="https://i.ibb.co/8j9ZyRy/Screenshot-22.png"
              alt="Screenshot-22"
              border="0"
            />
            <br />
            <br />
            <li>Encoding the Dependent Variable</li>
            <img
              src="https://i.ibb.co/Twk9qjs/Screenshot-23.png"
              alt="Screenshot-23"
              border="0"
            />
            <p>
              Here we have called fit_transform() function from LabelEncoder()
              class, It transform the strings into integers.
            </p>
          </ol>
          <br />
          <li>Splitting the dataset into the Training set and Test set</li>
          <br />
          <p>
            Training set is a subset of your data on which your model will learn
            how to predict dependent variable with the help of independent
            variable whearas Test set is the subset from the training set on
            which we will calculate where the prediction is correct or not.
          </p>
          <img
            src="https://i.ibb.co/7kcYBsj/screenshot-colab-research-google-com-2021-02-20-14-34-51.png"
            alt="screenshot-colab-research-google-com-2021-02-20-14-34-51"
            border="0"
          />
        </ol>
      </div>
    </div>
  );
}

export default Content;
