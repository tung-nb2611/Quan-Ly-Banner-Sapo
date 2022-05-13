package com.banner_management.backend.service;
import java.util.List;
import java.util.NoSuchElementException;

import javax.transaction.Transactional;

import com.banner_management.backend.entity.BannerEntity;
import com.banner_management.backend.repository.BannerRepository;
<<<<<<< HEAD

=======
>>>>>>> 46b52ec208244197b799b99e415dc224194e1c51
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Service;

@Service
public class BannerService  {

    @Autowired
    private BannerRepository repository;

    public List<BannerEntity> listAllBanner(){
        return repository.findAll();
    }

    @Transactional
    public void save(BannerEntity bannerEntity){
        repository.save(bannerEntity);
    }

    public BannerEntity getById(Integer id){
        return repository.findById(id).get();
    }

    @Transactional
    public void delete(Integer id){
        try {
            repository.deleteById(id);
        }catch (NoSuchElementException e){

        }
    }
    public Page<BannerEntity> getBannerPage(int number) {
        PagingAndSortingRepository<BannerEntity, Integer> bannerRepository = repository;
        Page<BannerEntity> banners = bannerRepository.findAll(PageRequest.of(number, 5));
        return banners;
    }

    public Page<BannerEntity> getBannerStatusPage(int sectionId, int number){
        PagingAndSortingRepository<BannerEntity, Integer> bannerEntity = repository;
        Pageable pageNumber = PageRequest.of(number, 5);
        Page<BannerEntity> banners = repository.getBannerStatusBySections(sectionId, pageNumber);
        return banners;
    }

}
