package ch.zhaw.freelancer4u.model.voucher;

import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

public class TwoForOneVoucher implements Voucher {
    private final JobType applicableJobType;

    public TwoForOneVoucher(JobType applicableJobType) {
        this.applicableJobType = applicableJobType;
    }

    @Override
    public double getDiscount(List<Job> jobs) {
        Map<JobType, Long> jobCount = jobs.stream()
                                          .collect(Collectors.groupingBy(Job::getJobType, Collectors.counting()));

        Long count = jobCount.getOrDefault(applicableJobType, 0L);
        double discount = jobs.stream()
                              .filter(job -> job.getJobType() == applicableJobType)
                              .mapToDouble(Job::getEarnings)
                              .sum();

        return count >= 2 ? discount / 2 : 0.0;
    }
}
