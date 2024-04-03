package ch.zhaw.freelancer4u.model.voucher;

import ch.zhaw.freelancer4u.model.voucher.Voucher;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import java.util.Collections;
import java.util.List;

public class FiveBucksVoucherTest {

    @Test
    public void testEmpty() {
        FiveBucksVoucher voucher = new FiveBucksVoucher();
        List<Job> emptyList = Collections.emptyList();
        assertEquals(0.0, voucher.getDiscount(emptyList));
    }

    @Test
    public void testTen() {
        FiveBucksVoucher voucher = new FiveBucksVoucher();
        Job job = new Job("Job description", JobType.TEST, 10.0);
        assertEquals(5.0, voucher.getDiscount(Collections.singletonList(job)));
    }


}
