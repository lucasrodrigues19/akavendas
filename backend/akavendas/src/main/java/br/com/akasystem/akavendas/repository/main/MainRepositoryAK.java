package br.com.akasystem.akavendas.repository.main;

import javax.persistence.MappedSuperclass;
import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.akasystem.akavendas.entities.main.EntityMain;


@Transactional
@MappedSuperclass
public interface MainRepositoryAK<E extends EntityMain> extends JpaRepository<E, Long>{

}
