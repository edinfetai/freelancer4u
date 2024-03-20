package ch.zhaw.freelancer4u.service;

import ch.zhaw.freelancer4u.model.Job;
import ch.zhaw.freelancer4u.model.JobState;
import ch.zhaw.freelancer4u.model.Freelancer;
import ch.zhaw.freelancer4u.repository.JobRepository;
import ch.zhaw.freelancer4u.repository.FreelancerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class JobService {
    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private FreelancerRepository freelancerRepository;

    public Optional<Job> assignJob(String jobId, String freelancerEmail) {
        Optional<Job> jobToAssign = jobRepository.findById(jobId);
        if (!jobToAssign.isPresent()) {
            return Optional.empty(); // Aufgabe 1: Prüfen, ob die jobId gültig ist
        }

        Job job = jobToAssign.get();
        if (job.getJobState() != JobState.NEW) {
            return Optional.empty(); // Aufgabe 2: Prüfen, ob sich der Job im Zustand NEW befindet
        }

        Freelancer freelancer = freelancerRepository.findFirstByEmail(freelancerEmail);
        if (freelancer == null) {
            return Optional.empty(); // Aufgabe 3 und 4: Prüfen, ob das E-Mail gültig ist und ID des Freelancers lesen
        }

        // Aufgabe 5: Zuweisung vornehmen
        job.setJobState(JobState.ASSIGNED);
        job.setFreelancerId(freelancer.getId());

        // Aufgabe 6: Neuen Job speichern und als Optional zurückgeben
        jobRepository.save(job);
        return Optional.of(job);
    }
}
