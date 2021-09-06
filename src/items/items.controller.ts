import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDTO  } from './dto/create-item.dto';
import { Item } from './interfaces/item.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
	constructor(private _item: ItemsService) {}
	
	@Get()
	findAll(): Promise<Item[]> {
		return this._item.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id): Promise<Item> {
		return this._item.findOne(id);
	}

	@Post()
	create(@Body() createItemDto: CreateItemDTO): Promise<Item> {
		return this._item.create(createItemDto);
	}

	@Delete(':id')
	delete(@Param('id') id): Promise<Item> {
		return this._item.delete(id);
	}

	@Put(':id')
	update(@Body() updateItemDto: CreateItemDTO, @Param('id') id): Promise<Item> {
		return this._item.update(id, updateItemDto);
	}
}