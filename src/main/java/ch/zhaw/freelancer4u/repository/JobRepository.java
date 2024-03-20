package ch.zhaw.freelancer4u.repository;

import java.util.List;

import ch.zhaw.freelancer4u.model.Job;
import ch.zhaw.freelancer4u.model.JobStateAggregation;

import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobRepository extends MongoRepository<Job, String> {
    List<Job> findByEarningsGreaterThan(Double earnings);

    @Aggregation("{$group:{_id:'$jobState',jobIds:{$push:'$_id',},count:{$count:{}}}}")
    List<JobStateAggregation> getJobStateAggregation();
}
