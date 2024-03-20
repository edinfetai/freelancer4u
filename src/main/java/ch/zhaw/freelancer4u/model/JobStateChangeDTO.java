package ch.zhaw.freelancer4u.model;

public class JobStateChangeDTO {
    private String jobId;
    private String freelancerEmail;

    public JobStateChangeDTO() {
        // Default constructor
    }

    // Constructor using fields
    public JobStateChangeDTO(String jobId, String freelancerEmail) {
        this.jobId = jobId;
        this.freelancerEmail = freelancerEmail;
    }

    // Getters
    public String getJobId() {
        return jobId;
    }

    public String getFreelancerEmail() {
        return freelancerEmail;
    }

    // Setters
    public void setJobId(String jobId) {
        this.jobId = jobId;
    }

    public void setFreelancerEmail(String freelancerEmail) {
        this.freelancerEmail = freelancerEmail;
    }
}
