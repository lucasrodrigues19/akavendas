package br.com.akasystem.akavendas.service.main;

import java.util.List;

import javax.persistence.MappedSuperclass;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.akasystem.akavendas.entities.main.EntityMain;
import br.com.akasystem.akavendas.repository.main.MainRepositoryAK;

@MappedSuperclass
@Service
public class MainServiceAK<E extends EntityMain>{

	private MainRepositoryAK<E> mainRepository;
	
	public void setRepository(MainRepositoryAK<E> repository) {
		this.mainRepository = repository;
	}
	
	
	public List<E> findAll(){
		return  mainRepository.findAll();
	}
	public Page<E> findAll(Pageable pageable){
		return  mainRepository.findAll(pageable);
	}
	
	
	public E findById(Long id){
		return  mainRepository.findById(id).get();
	}
	
	public void deleteById(Long id){
		mainRepository.deleteById(id);
	}
	
	public void save(E entity) {
		mainRepository.save(entity);
	}
}
