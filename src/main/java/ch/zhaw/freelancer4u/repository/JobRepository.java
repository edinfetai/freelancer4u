package ch.zhaw.freelancer4u.repository;

import java.util.List;

import ch.zhaw.freelancer4u.model.Job;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobRepository extends MongoRepository<Job, String> {
    List<Job> findByEarningsGreaterThan(Double earnings);
}

