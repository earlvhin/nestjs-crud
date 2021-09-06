import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Item } from './interfaces/item.interface';


@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly _item: Model<Item>) {}

    async findAll(): Promise<Item[]> {
        return await this._item.find();
    }

    async findOne(id: string): Promise<Item> {
        return await this._item.findOne({ _id: id });
    }

    async create(item: Item): Promise<Item> {
        const newItem = new this._item(item);
        return await newItem.save();
    }

    async delete(id: string): Promise<Item> {
        return await this._item.findByIdAndRemove(id);
    }

    async update(id: string, item: Item): Promise<Item> {
        return await this._item.findByIdAndUpdate(id, item, { new: true });
    }
}