import React, { useState } from 'react'


function Second() {
    const [job, setJob] = useState("");
    const [description, setDescription] = useState("");
    const [allPosts, setAllPosts] = useState([]);

    const inputEvent = (event) => {
        setJob(event.target.value);
    };

    const inputEvent2 = (event) => {
        setDescription(event.target.value);
    };

    const onSubmit = () => {
        let post = {
            job: job,
            description: description
        }
        let newAllPosts = [...allPosts, post]
        setAllPosts(newAllPosts)
        setJob('')
        setDescription('')
    }
    console.log(allPosts)
    return (
        <div>

            <lefty className="left">
                <button> New Post  </button>
                <input type="text" placeholder="Enter Job Title" value={job} onChange={inputEvent}></input>
                <textarea type="text" rows="13" cols="15" placeholder="Enter Job Description" value={description} onChange={inputEvent2}></textarea>
                <button onClick={onSubmit}>Publish</button>
            </lefty>

            <righty className="right">
                <button id="published">Published Posts</button>
                {/* <textarea type="text" rows="22" cols="22" placeholder="Published Jobs" value={details}></textarea> */}
                <div>
                    {
                        allPosts && allPosts.map((post) => (
                            <div style={{margin: '10px'}}>
                                <div>
                                    Job Title : {post.job}
                                </div>
                                <div>
                                    Description : {post.description}
                                </div>
                                <br/>
                                <hr/>
                            </div>
                        ))
                    }
                </div>
            </righty>

        </div>
    )
}

export default Second
