package br.com.akasystem.akavendas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.akasystem.akavendas.entities.dto.SaleDTOAK;
import br.com.akasystem.akavendas.service.SaleServiceAK;

@RestController
@RequestMapping("/sales")
public class SaleController {

	@Autowired
	private SaleServiceAK SaleService;
	
	@GetMapping
	public ResponseEntity<Page<SaleDTOAK>> findAll(Pageable pageable){
		Page<SaleDTOAK> result = SaleService.findAllDTO(pageable);
		return ResponseEntity.ok().body(result);
	}
}
