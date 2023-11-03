package it.unical.informatica.webapp24.recensioneristorante.controller;

import it.unical.informatica.webapp24.recensioneristorante.model.Ristorante;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class ServiziRest {
    @PostMapping("/addRistorante")
    public String aggiungiRistorante(ArrayList<Ristorante> ristoranti)
    {
        return "ok";
    }
}
