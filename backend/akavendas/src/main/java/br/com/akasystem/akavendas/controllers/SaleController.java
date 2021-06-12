package br.com.akasystem.akavendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.akasystem.akavendas.entities.dto.SaleDTOAK;
import br.com.akasystem.akavendas.entities.dto.SaleSuccessDTO;
import br.com.akasystem.akavendas.entities.dto.SaleSumDTO;
import br.com.akasystem.akavendas.service.SaleServiceAK;

@RestController
@RequestMapping("/sales")
public class SaleController {

	@Autowired
	private SaleServiceAK saleService;
	
	@GetMapping
	public ResponseEntity<Page<SaleDTOAK>> findAll(Pageable pageable){
		Page<SaleDTOAK> result = saleService.findAllDTO(pageable);
		return ResponseEntity.ok().body(result);
	}
	
	/**
	 * Metodo para o grafico de rosca
	 * @return
	 */
	@GetMapping(value = "/amount-by-seller")
	ResponseEntity<List<SaleSumDTO>> amountGroupBySeller(){
		return ResponseEntity.ok(saleService.amountGroupBySeller());
	}
	/**
	 * Metodo para o grafico de barras horizontal
	 * @return
	 */
	@GetMapping(value = "/success-by-seller")
	ResponseEntity<List<SaleSuccessDTO>> successGroupBySeller(){
		return ResponseEntity.ok(saleService.successGroupBySeller());
	}
}
