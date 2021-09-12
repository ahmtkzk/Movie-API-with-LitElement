package com.ahmtkzk.MovieAPI.Controllers;

import com.ahmtkzk.MovieAPI.Models.Film.Film;
import com.ahmtkzk.MovieAPI.Services.filmService;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@AllArgsConstructor
public class KontrolSinifi {

    private filmService service;

    @GetMapping("/")
    public List<Film> getAll() {
        return new ArrayList<>(service.getAllFilms());
    }

    @GetMapping("/Delete/{id}")
    public ModelAndView deleteAFilm(@PathVariable(name = "id") String id) {
        service.deleteFilm(id);
        return new ModelAndView("redirect:http://localhost:8000/dev/");
    }

    @PostMapping(value = "/Save", consumes = "application/json", produces = "application/json")
    public String saveAFilm(@RequestBody Film film) {
        service.insertFilm(film);
        return "Başarılı";
    }

}
