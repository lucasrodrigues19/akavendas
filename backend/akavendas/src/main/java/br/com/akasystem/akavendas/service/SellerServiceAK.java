package br.com.akasystem.akavendas.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.akasystem.akavendas.entities.SellerAK;
import br.com.akasystem.akavendas.entities.dto.SellerDTOAK;
import br.com.akasystem.akavendas.repository.SellerRepositoryAK;
import br.com.akasystem.akavendas.service.main.MainServiceAK;

@Service
public class SellerServiceAK extends MainServiceAK<SellerAK> {

	@Autowired
	public SellerServiceAK(SellerRepositoryAK sellerRepositoryAK) {
		setRepository(sellerRepositoryAK);
	}
	
	public List<SellerDTOAK> findAllDTO(){
		return findAll().stream().map( s -> new SellerDTOAK(s)).collect(Collectors.toList());
	}
}
