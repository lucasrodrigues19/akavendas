package br.com.akasystem.akavendas.entities.main;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.MappedSuperclass;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Inheritance(strategy = InheritanceType.JOINED)
@MappedSuperclass
public class EntityMain {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
}
