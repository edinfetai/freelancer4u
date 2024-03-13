package ch.zhaw.freelancer4u.model;

import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
// TODO: Lombok-Annotationen für Konstruktor ergänzen
@Document("job")
public class Job {
    // TODO: Restliche Attribute ergänzen
    private JobStage jobState = JobStage.NEW;
}
