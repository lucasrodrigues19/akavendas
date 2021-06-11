package br.com.akasystem.akavendas.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.akasystem.akavendas.entities.SaleAK;
import br.com.akasystem.akavendas.entities.dto.SaleDTOAK;
import br.com.akasystem.akavendas.repository.SaleRepositoryAK;
import br.com.akasystem.akavendas.service.main.MainServiceAK;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class SaleServiceAK extends MainServiceAK<SaleAK> {

	@Autowired
	private SellerServiceAK sellerServiceAK;
	
	@Autowired
	public SaleServiceAK(SaleRepositoryAK saleRepositoryAK) {
		setRepository(saleRepositoryAK);
	}
	
	@Transactional(readOnly = true) //isso é para que toda operação no banco seja tratada na service, e readOnly é para não dar lock no banco, por que é so leitura
	public Page<SaleDTOAK> findAllDTO(Pageable pegeable){
		log.info("Busco os vendedores primeiro( por que nesse caso são poucos ), para ficar em memoria e o JPA não precisar ir no banco varias vezes para busca-los, a cada venda");
		sellerServiceAK.findAllDTO();
		return findAll(pegeable).map( s -> new SaleDTOAK(s));
	}
}
