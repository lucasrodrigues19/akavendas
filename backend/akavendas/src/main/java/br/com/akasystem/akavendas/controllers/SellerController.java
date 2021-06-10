package br.com.akasystem.akavendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.akasystem.akavendas.entities.dto.SellerDTOAK;
import br.com.akasystem.akavendas.service.SellerServiceAK;

@RestController
@RequestMapping("/sellers")
public class SellerController {

	@Autowired
	private SellerServiceAK sellerService;
	
	@GetMapping
	public ResponseEntity<List<SellerDTOAK>> findAll(){
		List<SellerDTOAK> result = sellerService.findAllDTO();
		return ResponseEntity.ok().body(result);
	}
}
