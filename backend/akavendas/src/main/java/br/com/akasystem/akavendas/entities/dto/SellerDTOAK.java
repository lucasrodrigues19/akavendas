package br.com.akasystem.akavendas.entities.dto;

import java.io.Serializable;

import br.com.akasystem.akavendas.entities.SellerAK;
import br.com.akasystem.akavendas.entities.dto.main.MainDTOAK;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SellerDTOAK extends MainDTOAK implements Serializable {
	private static final long serialVersionUID = 1L;
	private String name;
	
	public SellerDTOAK(SellerAK seller) {
		setId(seller.getId());
		setName(seller.getName());
	}
}
