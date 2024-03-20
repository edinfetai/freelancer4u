package ch.zhaw.freelancer4u.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ch.zhaw.freelancer4u.model.Job;
import ch.zhaw.freelancer4u.model.JobCreateDTO;
import ch.zhaw.freelancer4u.model.JobStateAggregation;
import ch.zhaw.freelancer4u.repository.JobRepository;

@RestController
@RequestMapping("/api")
public class JobController {

    @Autowired
    JobRepository jobRepository;

    @PostMapping("/job")
    public ResponseEntity<Job> createJob(@RequestBody JobCreateDTO cDTO) {
        Job jDAO = new Job(cDTO.getDescription(), cDTO.getJobType(), cDTO.getEarnings());
        Job j = jobRepository.save(jDAO);
        return new ResponseEntity<>(j, HttpStatus.CREATED);
    }

    @GetMapping("/job")
    public ResponseEntity<List<Job>> getAllJobs(@RequestParam(required = false) Double min) {
        List<Job> allJobs = jobRepository.findAll();
        return new ResponseEntity<>(allJobs, HttpStatus.OK);
    }

    @GetMapping("/job/aggregation/state")
    public List<JobStateAggregation> getJobStateAggregation() {
        return jobRepository.getJobStateAggregation();
    }
}
