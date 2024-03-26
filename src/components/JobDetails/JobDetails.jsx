import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";


const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    // console.log(job);

    const handleApplyJob = () =>{
        saveJobApplication(idInt);
        toast('You have applied successfully');
    }

    return (
        <div>
            
            <div className="grid md:grid-cols-4 gap-4">
                <div className="border md:col-span-3">
                    <h2 className="text-3xl">Details Coming Here</h2>
                    <h2>Job Details of: {job.job_title}</h2>
                    <p>{job.company_name}</p>
                    <p>{job.job_description}</p>
                </div>
                <div className="border">
                    <h2 className="text-xl">Side things</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary">Apply</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;