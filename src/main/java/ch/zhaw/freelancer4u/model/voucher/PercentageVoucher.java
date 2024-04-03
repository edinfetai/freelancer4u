package ch.zhaw.freelancer4u.model.voucher;

public class PercentageVoucher implements Voucher {
    private final int discountPercentage;

    public PercentageVoucher(int discountPercentage) {
        this.discountPercentage = discountPercentage;
    }

    @Override
    public double getDiscount(List<Job> jobs) {
        double sum = jobs.stream().mapToDouble(Job::getEarnings).sum();
        return sum * discountPercentage / 100.0;
    }
}
