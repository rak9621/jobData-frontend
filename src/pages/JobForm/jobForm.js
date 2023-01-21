import Swal from "sweetalert2";
import axios from "axios";
import { useForm } from "react-hook-form";
import ApiConstants from "../../services/services";

const JobForm = () => {

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post(ApiConstants.CREATE_JOB, {
        companyName:data.companyName,
        jobId: data.jobId,
        jobTitle: data.jobTitle,
        role: data.role,
        experience: data.experience,
        jobType :data.jobType,
        travelRequired:data.travelRequired,
        country: data.country,
        state: data.state,
        city: data.city,
        postedOn:data.postedOn,
        LastDate: data.LastDate,
        job_description:data.job_description,
        skillRequired: data.skillRequired
})
        .then((response) => {
  Swal.fire({
    title: "added successful ",
    icon: "success",
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    confirmButtonText: "Ok",
  });
})
  .catch((error) => {

    Swal.fire({
      title: "Backend not connected",
      icon: "info",
      width: 400,
      height: 100,
    });

  })

 }

return (
  <>
    <div className="container-fluid">

      <div>

        <form className="border" onSubmit={handleSubmit(onSubmit)}>

          <h1 className="text-center"> Job data</h1>
          <div class="row m-4">
            <div class="form-group col-md-6">
              <label >CompanyName</label>
              <input type="text" class="form-control"
                {...register("companyName")}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputCity">Job id</label>
              <input type="text" class="form-control"
                {...register("jobId")}
              />
            </div>  
          </div>

          <div class="row m-4">
            <div class="form-group col-md-6">
              <label for="inputCity">Job title</label>
              <input type="text" class="form-control"
                {...register("jobTitle")}
              />
            </div>

            <div class="form-group col-md-6">
              <label for="inputCity">Job Role</label>
              <input type="text" class="form-control"
                {...register("role")}
              />
            </div>
          </div>

          <div class="row m-4">
            <div class="form-group col-md-6">
              <label for="inputCity">Year Of Experience</label>
              <input type="number" min={0} class="form-control"
                {...register("experience")}
              />
            </div>

            <div class="form-group col-md-6">
              <label for="inputCity">Job Type</label>
              <input type="text" class="form-control"
                {...register("jobType")}
              />
            </div>
          </div>


          <div class="row m-4">
            <div class="form-group col-md-6">
              <label for="inputCity">Travel Required</label>
              <select class="form-control" name="travelRequired"
                {...register("travelRequired")}
              >
                <option value="true"> Yes</option>
                <option value="false"> No</option>
              </select>
            </div>
          </div>

          <div class="row m-4">
            <div class="form-group col-md-4">
              <label for="inputCity">Country</label>
              <input type="text" class="form-control" 
                {...register("country")}
              />
            </div>

            <div class="form-group col-md-4">
              <label for="inputCity">State</label>
              <input type="text" class="form-control" id="inputCity"
                {...register("state")}
              />
            </div>

            <div class="form-group col-md-4">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity"
                {...register("city")}
              />
            </div>
          </div>

          <div class="row m-4">
            <div class="form-group col-md-6">
              <label for="inputCity">PostedOn</label>
              <input type="date" class="form-control"
                {...register("postedOn")}
              />
            </div>

            <div class="form-group col-md-6">
              <label for="inputCity">End Date</label>
              <input type="date" class="form-control"
                {...register("LastDate")}
              />
            </div>
          </div>

          <div class="row m-4">
            <div class="form-group ">
              <label for="inputCity">Job Description</label>
              <input type="text" class="form-control"
                {...register("job_description")}
              />
            </div>
          </div>

          <div class="row m-4">
            <div class="form-group col-md-6">
              <label for="inputCity">Skill Required</label>
              <input type="text" class="form-control"
                {...register("skillRequired")}
              />
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" class="btn btn-primary m-6  ">Upload</button>
          </div>
        </form>
      </div>
    </div>

  </>
)
}


export default JobForm